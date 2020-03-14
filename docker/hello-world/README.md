빌드
docker build -t hello-world:1 .

실행
docker run -it --rm -p 8080:80 hello-world:1

http://localhost:8080 에 접속해서 실행 확인
