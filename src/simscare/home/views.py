# from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class HomeView(TemplateView):
    template_name = "home/home.html"


class AboutUsView(TemplateView):
    template_name = "home/about_us_page.html"


class ServicesView(TemplateView):
    template_name = "home/services_page.html"


class PricingView(TemplateView):
    template_name = "home/pricing_page.html"


class ContactUsView(TemplateView):
    template_name = "home/contact_us_page.html"

