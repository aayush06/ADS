from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .tasks import print_hello


class TaskCreateView(APIView):
    def post(self, request):
        print_hello.delay()
        return Response({"message": "Created Task"}, status=status.HTTP_201_CREATED)
