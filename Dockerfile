FROM python:3

ENV PYTHONUNBUFFERED=1

WORKDIR /ecommerce

COPY ./requirements.txt /tmp/requirements.txt

COPY ./ecommerce /ecommerce

EXPOSE 8000

RUN python -m venv /py && \
    /py/bin/pip install -r /tmp/requirements.txt

ENV PATH='/py/bin:$PATH'