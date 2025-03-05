# 🚗 Vehicle Configurator

## 🌍 Overview
The **Vehicle Configurator** is a B2B 🏢 portal designed for rental 🚘 companies to lease 🚙 from leasing companies. 🧑‍💻 Users can select and ⚙️ configure vehicles based on predefined 📜 conditions, with real-time ⏳ cost adjustments. The system is built with a 🏗️ microservices architecture and ensures seamless 🧾 invoice generation in 📄 PDF format after a successful ✅ transaction.

## 🛠️ Tech Stack
- **🖥️ Backend**: Spring Boot 3, Jakarta EE, Maven 3, JPA, MySQL 8, 🐳 Docker, 🔑 JWT Authentication, Microservices
- **🎨 Frontend**: ⚛️ React JS 18
- **Additional 🖥️ Backend (Microservices)**: .NET Core, Web API Core 8.0, SQL Server, Entity Core 8.0

## ⭐ Features
- 🚙 Vehicle selection and ⚙️ configuration based on leasing conditions
- 💰 Dynamic pricing updates based on configurations
- 🔒 Secure authentication and authorization using 🔑 JWT
- 🏗️ Microservices-based architecture for 📏 scalability and 🔧 maintainability
- 🧾 Invoice generation in 📄 PDF format and automatic 📧 email dispatch
- 🗄️ Database-driven system for easy 📊 data management

## 📥 Installation
### ✅ Prerequisites
Ensure you have the following installed:
- ☕ Java 17+
- 🟢 Node.js 18+
- 🗄️ MySQL 8
- 🖥️ .NET Core 8
- 🐳 Docker

### 🖥️ Backend (Spring Boot Service)
1. 📥 Clone the repository:
   ```sh
   git clone https://github.com/yourusername/vehicle-configurator.git
   cd vehicle-configurator/backend
   ```
2. ⚙️ Configure database credentials in `application.properties`.
3. 🏗️ Build and ▶️ run the service:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```

### 🖥️ Backend (.NET Core Service)
1. Navigate to the .NET Core service directory:
   ```sh
   cd vehicle-configurator/dotnet-service
   ```
2. 🔄 Restore dependencies and ▶️ run the service:
   ```sh
   dotnet restore
   dotnet run
   ```

### 🎨 Frontend (React.js)
1. Navigate to the frontend directory:
   ```sh
   cd vehicle-configurator/frontend
   ```
2. 📦 Install dependencies and ▶️ start the development server:
   ```sh
   npm install
   npm start
   ```

## 🚀 Usage
1. 📝 Register or 🔑 log in using JWT authentication.
2. 🔍 Browse available 🚗 vehicles and ⚙️ configure them according to your requirements.
3. 📊 View real-time ⏳ pricing updates based on configurations.
4. ✅ Complete the lease transaction and receive an 🧾 invoice via 📧 email.



## 🤝 Contributing
💡 Contributions are welcome! Please follow these steps:
1. 🍴 Fork the repository.
2. 🌱 Create a feature branch: `git checkout -b feature-name`.
3. 💾 Commit your changes: `git commit -m 'Add feature'`.
4. ⬆️ Push to the branch: `git push origin feature-name`.
5. 🔃 Open a pull request.

## 📜 License
This project is licensed under the [MIT License](LICENSE).

## 📩 Contact
For any ❓ queries or 🛠️ support, please contact [your-email@example.com](mailto:your-email@example.com).

