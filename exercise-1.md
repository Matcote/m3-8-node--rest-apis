# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of what it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint             | method   | Description                                                      |
| -------------------- | -------- | ---------------------------------------------------------------- |
| `/test`              | `GET`    | It is a test endpoint.                                           |
| `/stock`             | `GET`    | Shows all inventory in the store                                 |
| `/stock/soldout`     | `GET`    | Shows all products which are out of stock/need to be replenished |
| `/stock/:type`       | `GET`    | shows the stock of a certain category of products                |
| `/stock/:id`         | `GET`    | shows the stock of a certain product/ingredient                  |
| `/stock/:id`         | `PUT`    | Updates stock level of a certain product                         |
| `/stock/:id`         | `DELETE` | Used when discontinuing a product                                |
| `/stock`             | `POST`   | Introduces a new product into the inventory                      |
| `/stock/:type`       | `POST`   | Introduces a new product category into the inventory             |
| `/users`             | `GET`    | Shows a list of all customers who have ever bought something.    |
| `/users/:id`         | `GET`    | Shows data on a specific customer.                               |
| `/users`             | `POST`   | Add a customer to the list of customers                          |
| `/users/top`         | `GET`    | Show most loyal customers                                        |
| `/users/old`         | `GET`    | Shows customers who have not been to the cafe in 1 year or more  |
| `/users/:id`         | `PUT`    | Updates a specific user's data                                   |
| `/users/:id`         | `DELETE` | Deletes a customer's data.                                       |
| `/seats`             | `GET`    | Shows all seating, which seats are available/taken               |
| `/seats/:id`         | `GET`    | shows whether a specific seat is available                       |
| `/seats/:id`         | `PUT`    | Change availability.                                             |
| `/seats`             | `POST`   | Adding seats to the cafe (renovations?)                          |
| `/seats/:id`         | `DELETE` | Removing seats from the cafe                                     |
| `/employees`         | `GET`    | Show all employees                                               |
| `/employees/:id`     | `GET`    | shows data of a specific employee                                |
| `/employees`         | `POST`   | Hiring a new employee                                            |
| `/employees/:id`     | `PUT`    | updating employee data/information                               |
| `/employees/:id`     | `DELETE` | Firing someone                                                   |
| `/dailyspecials`     | `GET`    | Displays all specials of the day                                 |
| `/dailyspecials/:id` | `GET`    | Shows one specific special                                       |
| `/dailyspecials`     | `POST`   | Adding a new special                                             |
| `/dailyspecials/:id` | `DELETE` | deleting a special                                               |
