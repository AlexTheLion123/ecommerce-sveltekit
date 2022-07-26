# Ecommerce with Sveltekit

This repo is intended to be more as a demonstration of understanding of a broad range of Sveltekit and webdevelopment topics such as routing, endpoints, load functions, hooks, sessions, authorization, cookies, and integration with backend; and not as a demonstration of a production ready ecommerce website. 

This repo contains a partially completed Ecommerce website built using Sveltekit for the frontend and supabase for the backend and authorization. The integration with Supabase is fully functional; all product information is retreived through specific SQL queries made to the relational tables on Supabase via Sveltekit endpoints. Also, the authorization (loggin in/out with google and github) works on a basic but secure level using cookies with a very basic UI/UX that would not be suitable for production. The authorization code was largely based off of the [Supabase community auth module](https://github.com/supabase-community/auth-helpers/blob/main/packages/sveltekit/README.md).
The payment and shopping cart functionalities have not been implemented. Some categories of product don't contain any items. 

This repo is far from production quality. Development of the website was ceased at the wishes of the employer. Also, the developer is in no way associated with any of the products advertised on the website. Everything complies with the legality of the location of sales. 

# TODO
- Homepage
- Improve general UI
- Complete product information for all categories
- Improve login UI/UX
- Shopping cart
- Payment gateway
