VERSION := v1.1.0
BUILD :=$(shell git rev-parse --short HEAD)

all: build

build:
	npm run build

image: 
	@docker build -t registry.sensetime.com/viper-test/my-frontend:$(VERSION)-$(BUILD) .

push: image
	docker push registry.sensetime.com/viper-test/my-frontend:$(VERSION)-$(BUILD)

.PHONY: clean all build lint image

tag:
	@git tag $(VERSION)-$(BUILD)

test:
	npm run test

lint:
	npm run lint

clean:
	rm -f build
