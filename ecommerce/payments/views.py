from django.conf import settings
from django.shortcuts import render, redirect
import stripe
from django.views.generic.base import TemplateView

stripe.api_key = settings.STRIPE_SECRET_KEY

class HomePageView(TemplateView):

    template_name = 'home.html'

    def home(request):
        return render(request, 'home.html')
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['key'] = settings.STRIPE_PUBLISHABLE_KEY
        return context
    
    def charge(request): 
        if request.method == 'POST':
            charge = stripe.Charge.create(
                amount=250,
                currency='usd',
                description='Payment Gateway',
                source=request.POST['stripeToken']
            )
            return render(request, 'charge.html')


    # def charge(request):
    #     if request.method == 'POST':
    #         stripe.api_key = settings.STRIPE_SECRET_KEY
    #         token = request.POST['stripeToken']
    #         try:
    #             charge = stripe.Charge.create(
    #                 amount=500,
    #                 currency='usd',
    #                 description='A Django charge',
    #                 source=token
    #             )
    #             return render(request, 'charge.html')
    #         except stripe.error.CardError as e:
    #             # Display error message in the template
    #             return render(request, 'error.html', {'error': e})

      

    