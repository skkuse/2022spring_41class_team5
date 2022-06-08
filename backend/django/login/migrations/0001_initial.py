# Generated by Django 4.0.4 on 2022-05-13 03:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='content',
            fields=[
                ('content_id', models.IntegerField(primary_key=True, serialize=False)),
                ('content_content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='problem',
            fields=[
                ('problem_id', models.IntegerField(primary_key=True, serialize=False)),
                ('problem_content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='progress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(null=True)),
                ('problem_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='submit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(null=True)),
                ('code', models.TextField()),
                ('problem_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='user',
            fields=[
                ('user_id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=45)),
                ('email', models.CharField(max_length=45)),
                ('password', models.CharField(max_length=45)),
            ],
        ),
    ]