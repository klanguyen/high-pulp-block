import {createRoot} from "react-dom/client";
import BlockApp from './components/BlockApp';

// normally it'd be like this:
// createRoot(document.getElementById('...')).render(BlockApp);

const blocks = document.querySelectorAll('.wp-block-kn-staff-finder');
blocks.forEach(block => {
	createRoot(block).render(<BlockApp />);
})
