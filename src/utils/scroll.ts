export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const offset = 80; // Độ cao của navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
};