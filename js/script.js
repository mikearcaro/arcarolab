<script>
    function startAutoScroll() {
        const container = document.getElementById('scrollingContent'); // Corrected the ID reference
        let scrollAmount = 0;

        function scrollContent() {
            scrollAmount += 1; // Increment the scroll position
            container.scrollTop = scrollAmount; // Apply the scroll to the container

            if (scrollAmount >= container.scrollHeight / 2) {
                scrollAmount = 0; // Reset scroll position if it reaches half of the scroll height
                container.scrollTop = 0; // Reset the scrollTop position to 0
            }
        }

        setInterval(scrollContent, 50); // Set the interval for the scroll movement, adjust the interval time as needed
    }

    document.addEventListener('DOMContentLoaded', startAutoScroll); // Start scrolling after the DOM is fully loaded
</script>
