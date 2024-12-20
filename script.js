if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(() => {
            console.log('Service Worker Registered');
        });
    });
}

async function fetchCatFact() {
    const factElement = document.getElementById('cat-fact');
    const spinner = document.getElementById('loading-spinner');
    
    spinner.style.display = 'inline-block';
    factElement.textContent = '';
    
    try {
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      factElement.textContent = data.fact;
    } catch (error) {
      factElement.textContent = 'Could not fetch a cat fact at the moment. Please try again!';
    } finally {
      spinner.style.display = 'none';
    }
  }

  fetchCatFact();
