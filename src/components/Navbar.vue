<template>
    <nav class="bg-white-100 p-4 md:py-2 md:px-3 shadow-lg rounded-t-md">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo section -->
            <div class="flex items-center space-x-2">
                <img src="@/assets/images/logo/logo.png" alt="Logo" class="h-8 w-15 md:h-10 md:w-15" />
            </div>
            <div class="flex items-center">
                <div class="flex items-center space-x-4">
                    <router-link to="/" class="nav-link" :class="{ 'active-link': $route.path === '/' }">About
                        me</router-link>
                    <router-link to="/work" class="nav-link"
                        :class="{ 'active-link': $route.path === '/work' }">Work</router-link>
                    <router-link to="/skills" class="nav-link"
                        :class="{ 'active-link': $route.path === '/skills' }">Skills</router-link>
                    <router-link to="/projects" class="nav-link"
                        :class="{ 'active-link': $route.path === '/projects' }">Projects</router-link>
                    <router-link to="/certifications" class="nav-link"
                        :class="{ 'active-link': $route.path === '/certifications' }">Certifications</router-link>
                    <router-link to="/case-study" class="nav-link"
                        :class="{ 'active-link': $route.path === '/case-study' }">Case Study</router-link>
                </div>
                <div class="m-2">
                    <button
                        class="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300">Hire
                        Me 🙋‍♂️</button>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: 'Navbar'
}
</script>
  
<style scoped>
/* Background color */
.bg-white-100 {
    background-color: #ffffff;
}

/* Styles for navigation links */
.nav-link {
    text-decoration: none;
    color: #6200ee;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
}

/* Hover effect for navigation links */
/* Active link style */
.nav-link:hover,
.active-link {
    color: #ffffff;
    background-color: #6200ee;
    padding: 0.2rem 0.5rem;
    border: none;
    border-radius: 5px;
}

/* Add styles for button hover effects */
button:hover {
    transform: scale(1.05);
    /* Increase size on hover */
    cursor: pointer;
}
</style>
  