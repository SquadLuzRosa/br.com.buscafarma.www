import hashlib
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models
from django.contrib.auth.hashers import make_password
from uuid import uuid4


class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('O campo de e-mail é obrigatório')
        if not name:
            raise ValueError('O campo de nome é obrigatório')
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        user = self.create_user(email, name, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        related_name='customuser_groups',
        related_query_name='customuser_group',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        related_name='customuser_user_permissions',
        related_query_name='customuser_user_permission',
    )

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


def upload_image(instance, filename):
    hash_instance = hashlib.sha256(str(instance.id).encode())
    hashed_filename = hash_instance.hexdigest() + '-' + filename
    return hashed_filename


class Address(models.Model):
    number = models.IntegerField()
    zip_code = models.IntegerField()
    neighborhood = models.CharField(max_length=255)
    city = models.CharField(max_length=150)
    state = models.CharField(max_length=150)
    complement = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.street}, {self.number} - {self.city}/{self.state}"

    class Meta:
        verbose_name = "Address"
        verbose_name_plural = "Addresses"
        ordering = ["city", "neighborhood"]

class Profile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    profile_picture = models.ImageField(upload_to=upload_image, blank=True, null=True)
    additional_info = models.TextField(blank=True, null=True)
    addres_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='addres_profile')
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='user_profile')

    def __str__(self):
        return f"{self.user_id.name} Profile"
    

ROLE_CHOICES = (
    ('ADM', 'Admin'),
    ('EDT', 'Edition'),
    ('VIW', 'Viewer'),
)


class UserAttributes(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    role = models.CharField(max_length=100, choices=ROLE_CHOICES)
    is_autenticated = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    last_login = models.DateField(blank=True, null=True)
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='user_atributes')

    def __str__(self):
        return f"Attributes of {self.user_id.name}"

class AuthTokens(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='user_token')
    access_token = models.CharField(max_length=255)
    refresh_token = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()
    refresh_expires_at = models.DateTimeField()

    def __str__(self):
        return f"Token of {self.user_id.name}"