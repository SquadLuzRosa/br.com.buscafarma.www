from rest_framework import generics
from .models import CustomUser, Profile, Address, UserAttributes, AuthTokens
from .serializers import CustomUserSerializer, ProfileSerializer, AddressSerializer, UserAttributesSerializer, AuthTokensSerializer
from rest_framework.response import Response
from rest_framework import status


class CustomUserCreateListView(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class ProfileCreateListView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class AddressCreateListview(generics.ListCreateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    
class UserAttributesCreateListview(generics.ListCreateAPIView):
    queryset = UserAttributes.objects.all()
    serializer_class = UserAttributesSerializer

class AuthTokensCreateListview(generics.ListCreateAPIView):
    queryset = AuthTokens.objects.all()
    serializer_class = AuthTokensSerializer
