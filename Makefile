up: build_api build_vue

down:
	@echo "stopping containers"
	docker stop dockerize-api-app-1
	docker stop dockerize-vuejs-app-1
	@echo "Done!"

build_api:
	@echo "build Api container"
	docker build -t dockerize-api-app ./backend
	docker run -d -p 3000:3000 --rm --name dockerize-api-app-1 dockerize-api-app
	@echo "Done!"

build_vue:
	@echo "build Vue container"
	docker build -t dockerize-vuejs-app ./frontend
	docker run -d -p 8080:8080 --rm --name dockerize-vuejs-app-1 dockerize-vuejs-app
	@echo "Done!"