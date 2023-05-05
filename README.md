# Ecommerce Website

This is an ecommerce website built using Django, React, Dockers, and Postgres for the backend, and Stripe for handling payments.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

You will need the following software installed on your local machine:

- Docker
- Docker Compose

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/ecommerce-website.git
```

2. Create a `.env` file in the root directory with the following environment variables:

```
DEBUG=1
SECRET_KEY=your-secret-key
DATABASE_URL=postgres://postgres:password@db:5432/postgres
ALLOWED_HOSTS=localhost 127.0.0.1 [::1]
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key
```

3. Start the development server:

```
docker-compose up --build
```

4. Open your browser and navigate to http://localhost:3000 to view the website.

## Features

This ecommerce website includes the following features:

- User authentication
- Product catalog with categories and tags
- Cart functionality
- Checkout with Stripe payments

## Contributors

- <a href="https://github.com/MarioTawfelis">Mario Tawfelis</a>
- <a href="https://github.com/KseniiaEfremova">Kseniia Efremova</a>
- <a href="https://github.com/BirchAD">Andrew Birch</a>
- <a href="https://github.com/HenryXanderTalent">Henry Opara</a>
- <a href="https://github.com/tariqanthonysmith">Tariq Smith</a>
- <a href="https://github.com/MasudMiahGIT">Masud Miah</a>
- <a href="https://github.com/YA-Maya">Sumeya Ahmed</a>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
