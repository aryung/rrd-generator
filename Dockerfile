#
# Cirrus - Watchdog Linux build environment
#

FROM ubuntu:20.04 as builder
WORKDIR /app

ARG DEBIAN_FRONTEND=noninteractive
ENV TZ Asia/Taipei
# nodeJS package
RUN apt-get update
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get -y install nodejs build-essential libpython3-dev rrdtool bc
#RUN pkg-config --cflags dbus-1
RUN npm install npm@latest -g

# create user with id 1000 to not run commands/generate files as root
#RUN useradd cirrus --create-home --home-dir /home/cirrus --shell /bin/bash --uid 1000
#RUN passwd -d cirrus
#RUN apt-get -y install sudo
#RUN usermod -aG sudo cirrus
#USER cirrus

CMD ["/bin/bash"]
