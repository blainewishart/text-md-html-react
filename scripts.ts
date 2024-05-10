function copyText(): void {
    const inputBox = document.getElementById('inBox') as HTMLInputElement;
    const outputBox = document.getElementById('outBox') as HTMLInputElement;
    outputBox.value = inputBox.value;
}
