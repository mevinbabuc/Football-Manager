#!/bin/sh

set -o errexit
set -o nounset
set -o xtrace

celery -A football_manager.taskapp worker -l INFO
