# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-09-09 08:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('match', '0012_auto_20170909_1150'),
    ]

    operations = [
        migrations.AlterField(
            model_name='standings',
            name='goals_d',
            field=models.IntegerField(default=0, verbose_name='Goals D'),
        ),
    ]
