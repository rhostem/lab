# 사용할 도커 이미지
FROM node:lts-alpine

# 컨테이너 안에서 실행 디렉토리 지정
WORKDIR /usr/src/app

# 컨텍스트(도커 명령어가 실행되는 폴더)에 있는 파일을 컨테이너의 WORKDIR로 복사
COPY package*.json ./

#  명령어 실행
RUN npm install

# 컨텍스트의 파일을 컨테이너로 복사
COPY . .

# 컨테이너 안의 포트를 외부와 통신 가능하도록 노출
EXPOSE 8080

# 컨테이너가 시작될 때 실행할 명령어
CMD [ "npm", "start" ]