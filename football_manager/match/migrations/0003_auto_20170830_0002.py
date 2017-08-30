# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-08-29 18:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('match', '0002_auto_20170829_2203'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='team_a_score',
            field=models.SmallIntegerField(default=0, editable=False),
        ),
        migrations.AlterField(
            model_name='match',
            name='team_b_score',
            field=models.SmallIntegerField(default=0, editable=False),
        ),
        migrations.AlterField(
            model_name='match',
            name='winning_team',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='match.Team'),
        ),
    ]
