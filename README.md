### To run project
###### Start backend service
- install requirements
``` pip install -r requirements.txt```
- start django project
```python manage.py runserver```
- start celery 
```celery -A task_manager worker --loglevel=info```
- start redis server 
```redis-server```

###### Start frontend service
- download dependencies
```npm install```
- start server 
```ng serve```