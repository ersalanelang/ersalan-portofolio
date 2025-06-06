import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css'; // Import KaTeX stylesheet

const LatexDisplay = ({ latex }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      try {
        // Render the LaTeX string inside the current ref element
        katex.render(latex, ref.current, {
          throwOnError: false, // Don't throw errors, just show the source LaTeX
          displayMode: true, // Use display mode for block equations ($$)
        });
      } catch (e) {
        // Fallback for rendering errors (e.g., display original string)
        ref.current.innerHTML = `<p style="color: red;">Error rendering LaTeX: ${latex}</p>`;
        console.error("KaTeX rendering error:", e);
      }
    }
  }, [latex]); // Re-render if the latex prop changes

  return <div ref={ref} />;
};

export default LatexDisplay;