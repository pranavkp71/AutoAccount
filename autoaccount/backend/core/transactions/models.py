from django.db import models
from django.contrib.auth.models import User

class Bankstatement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(upload_to='statements/')
