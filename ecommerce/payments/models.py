# from django.db import models

# from users.models import UserProfile 
# from django.dispatch import receiver
# from django.db.models.signals import post_save

# class UserPayment(models.Model):
#         app_user = models.ForeignKey(UserProfile , on_delete=models.CASCADE)
#         payment_bool = models.BooleanField(default=False)
#         stripe_checkout_id = models.CharField(max_length=500)


#         @receiver(post_save, sender=UserProfile )
#         def create_user_payment(sender, instance, created, **kwargs):
#                 if created:
#                         UserPayment.objects.create(app_user=instance)
