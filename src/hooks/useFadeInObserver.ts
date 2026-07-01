import { useEffect } from "react";

export const useFadeInObserver = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                    }
                });
            },
            {threshold: 0.05}
        );
        document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
};