<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-primary text-white text-center py-5">
      <div class="container">
        <h1 class="display-4 fw-bold">Welcome to {{ msg }}t</h1>
        <p class="lead">The best solution to all your business needs</p>
        <button class="btn btn-light btn-lg mt-3">Get Started</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-5">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4">
            <div class="card p-3 mb-4">
              <div class="card-body">
                <h5 class="card-title">Fast Performance</h5>
                <p class="card-text">Our product is designed for speed and reliability.</p>
                <button class="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card p-3 mb-4">
              <div class="card-body">
                <h5 class="card-title">Easy Integration</h5>
                <p class="card-text">Seamlessly integrate with your existing workflows.</p>
                <button class="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card p-3 mb-4">
              <div class="card-body">
                <h5 class="card-title">24/7 Support</h5>
                <p class="card-text">Our team is always here to help you.</p>
                <button class="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">Contact Us</h2>
        <form>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" class="form-control" id="name" placeholder="John Doe" />
            </div>
            <div class="col-md-6 mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email" placeholder="name@example.com" />
            </div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="5" placeholder="Write your message here..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg w-100">Submit</button>
        </form>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Our Pricing</h2>
        <div class="row text-center">
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Basic Plan</h5>
                <p class="card-text">$9.99 / month</p>
                <ul class="list-unstyled">
                  <li>10 Projects</li>
                  <li>Email Support</li>
                  <li>Basic Analytics</li>
                </ul>
                <button class="btn btn-outline-primary">Sign Up</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Pro Plan</h5>
                <p class="card-text">$29.99 / month</p>
                <ul class="list-unstyled">
                  <li>50 Projects</li>
                  <li>Priority Support</li>
                  <li>Advanced Analytics</li>
                </ul>
                <button class="btn btn-outline-primary">Sign Up</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h5 class="card-title">Enterprise Plan</h5>
                <p class="card-text">$99.99 / month</p>
                <ul class="list-unstyled">
                  <li>Unlimited Projects</li>
                  <li>Dedicated Support</li>
                  <li>Custom Solutions</li>
                </ul>
                <button class="btn btn-outline-primary">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-dark text-white text-center py-4">
      <div class="container">
        <p class="mb-0">© 2024 Your Company. All Rights Reserved.</p>
        <p>
          Follow us on
          <a href="#" class="text-white">Facebook</a>,
          <a href="#" class="text-white">Twitter</a>,
          <a href="#" class="text-white">Instagram</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
