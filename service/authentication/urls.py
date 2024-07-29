from django.urls import path
from .views import CustomUserCreateListView, ProfileCreateListView, AddressCreateListview, UserAttributesCreateListview, AuthTokensCreateListview


urlpatterns = [
    path('users/', CustomUserCreateListView.as_view(), name='user-create-list'),
    path('user-profile/', ProfileCreateListView.as_view(), name='user-profile-create-list'),
    path('profile-address/', AddressCreateListview.as_view(), name='profile-address-create-list'),
    path('user-attributes/', UserAttributesCreateListview.as_view(), name='user-attributes-create-list'),
    path('user-tokens/', AuthTokensCreateListview.as_view(), name='user-tokens-create-list'),
] 
