# Create a package.json file for the project
package_json_content = '''{
  "name": "cloudtech-store",
  "version": "1.0.0",
  "description": "A complete e-commerce web application built with HTML, CSS, and JavaScript",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "serve": "http-server -p 8080",
    "dev": "python -m http.server 3000"
  },
  "keywords": [
    "ecommerce",
    "shopping-cart",
    "responsive-design",
    "javascript",
    "html5",
    "css3",
    "web-application"
  ],
  "author": "CloudTech Development Team",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/cloudtech/store"
  },
  "homepage": "https://cloudtech-store.netlify.app",
  "engines": {
    "node": ">=12.0.0"
  },
  "devDependencies": {
    "http-server": "^14.1.1"
  },
  "browserslist": [
    "last 2 versions",
    "> 1%",
    "not dead"
  ]
}'''

# Write the package.json file
with open('package.json', 'w', encoding='utf-8') as f:
    f.write(package_json_content)

print("package.json file created successfully!")