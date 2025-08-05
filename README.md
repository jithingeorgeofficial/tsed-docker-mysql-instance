# Ts.ED - tsed-docker-mysql-instance

<div align="center">
  <a href="https://tsed.dev" target="_blank"><img src="https://tsed.dev/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</div>

<div align="center">
  <h1>Ts.ED - tsed-docker-mysql-instance</h1>
  <br />
  <div align="center">
    <a href="https://cli.tsed.dev/">Website</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://cli.tsed.dev/getting-started.html">Getting started</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://slack.tsed.dev">Slack</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://twitter.com/TsED_io">Twitter</a>
  </div>
  <hr />
</div>

> An awesome project based on Ts.ED framework with MySQL database integration

## 🚀 Quick Start

### Prerequisites
- **Node.js**: >= 20.x
- **TypeScript**: >= 5
- **Docker**: >= 20.10
- **Docker Compose**: >= 2.0

### Option 1: Docker (Recommended)

```bash
# Clone the repository
git clone <repository-url>
cd tsed-docker-mysql-instance

# Build and start all services
docker compose up -d

# Check status
docker compose ps

# View logs
docker compose logs server
```

**Access Points:**
- **API Server**: http://localhost:8081
- **API Documentation**: http://localhost:8081/doc
- **MySQL Database**: localhost:3307

### Option 2: Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run start
```

**Access Points:**
- **API Server**: http://localhost:8081
- **API Documentation**: http://localhost:8081/doc

## 📊 Database

### MySQL Configuration
- **Host**: localhost (Docker) / localhost (Local)
- **Port**: 3307 (Docker) / 3306 (Local)
- **Database**: tsed_db
- **Username**: root
- **Password**: password

### Database Tables
- `users` - User information
- `user_login_activity` - Login history
- `user_meta` - User metadata
- `user_devices` - Device information

### Run Migrations

**Docker:**
```bash
docker compose exec server npm run migration:run
```

**Local:**
```bash
npm run migration:run
```

## 🔧 Available Scripts

```bash
# Development
npm run start          # Start development server
npm run build         # Build for production
npm run start:prod    # Start production server

# Database
npm run migration:generate  # Generate new migration
npm run migration:run      # Run pending migrations
npm run migration:revert   # Revert last migration

# Docker
docker compose build   # Build Docker images
docker compose up      # Start all services
docker compose down    # Stop all services
```

## 📁 Project Structure

```
src/
├── config/           # Configuration files
├── controllers/      # API controllers
├── entities/         # TypeORM entities
├── migrations/       # Database migrations
└── index.ts         # Application entry point
```

## 🔗 API Endpoints

- `GET /rest/hello-world` - Hello World endpoint
- `GET /doc` - API documentation (Swagger)
- `GET /health` - Health check

## 🐳 Docker Configuration

### Services
- **server**: Ts.ED API application (Port 8081)
- **mysql**: MySQL 8.0 database (Port 3307)

### Volumes
- `mysql_data`: Persistent MySQL data storage

## 🛠️ Troubleshooting

### Port Conflicts
If ports 8081 or 3307 are in use, modify `docker-compose.yml`:
```yaml
ports:
  - "8082:8081"  # Change host port
```

### Database Connection Issues
1. Ensure MySQL container is running: `docker compose ps`
2. Check logs: `docker compose logs mysql`
3. Restart services: `docker compose restart`

### Migration Issues
1. Ensure database is ready: `docker compose exec mysql mysql -u root -ppassword -e "SELECT 1;"`
2. Run migrations: `docker compose exec server npm run migration:run`

## 📝 Environment Variables

Create `.env` file for local development:
```env
DATABASE_URL=mysql://root:password@localhost:3306/tsed_db
NODE_ENV=development
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.
