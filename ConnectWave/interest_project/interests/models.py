from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Interest(models.Model):
    sender = models.ForeignKey(User, related_name='sent_interests', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='received_interests', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[('Pending', 'Pending'), ('Accepted', 'Accepted'), ('Rejected', 'Rejected')])

    def __str__(self):
        return f'{self.sender} -> {self.receiver} : {self.status}'
