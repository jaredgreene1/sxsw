FROM balenalib/armv7hf-ubuntu-node

#switch on systemd init system in container
ENV INITSYSTEM on

# install python
RUN sudo apt-get update
RUN sudo apt-get install -y software-properties-common 
RUN sudo add-apt-repository ppa:deadsnakes/ppa
RUN sudo apt-get update
RUN sudo apt-get install -y python3.6 python3-pip



# pip install python deps from requirements.txt
# For caching until requirements.txt changes
COPY ./requirements.txt /requirements.txt
RUN pip3 install -r /requirements.txt

COPY . /usr/src/app
WORKDIR /usr/src/app

CMD ["bash","start.sh"]

