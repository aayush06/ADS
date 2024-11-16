from celery import shared_task
import time

@shared_task
def print_hello():
    time.sleep(3)
    print("Hello")