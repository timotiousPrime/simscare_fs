from django.urls import path
from home.views import HomeView, AboutUsView, ServicesView, PricingView, ContactUsView


urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path("about_us/", AboutUsView.as_view(), name="about_us"),
    path("services/", ServicesView.as_view(), name="services"),
    path("pricing/", PricingView.as_view(), name="pricing"),
    path("contact_us/", ContactUsView.as_view(), name="contact_us"),
]
