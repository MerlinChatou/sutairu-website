<script>
  import { afterNavigate } from '$app/navigation';
  import { trackEvent } from '#lib/firebase/analytics.js';

  let { children } = $props();

  afterNavigate(({ to }) => {
    if (!to?.url) return;

    trackEvent('page_view', {
      page_path: to.url.pathname + to.url.search,
      page_location: to.url.href,
      page_title: document.title
    });
  });
</script>


{@render children()}
