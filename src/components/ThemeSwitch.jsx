const ThemeSwitch = () => {

  const toggleTheme = () => {
    document.body.classList.toggle("light-theme");
  }

  return (
    <div className="theme-switch" onClick={toggleTheme}>
    <div className="switch"></div>
    </div>
  );
}

export default ThemeSwitch;