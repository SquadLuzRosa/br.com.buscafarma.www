from rest_framework import serializers
from .models import CustomUser, Profile, Address, UserAttributes, AuthTokens



class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id','name', 'email','password']
        extra_kwargs = {'password': {'write_only': True}}

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"

class UserAttributesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAttributes
        fields = "__all__"

class AuthTokensSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthTokens
        fields = "__all__"