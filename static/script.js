function getMarks(value, max) {
    if (value > max) {
        alert("Value cannot exceed " + max);
        return max;
    }
    return value;
}
function calculateAverage(values) {
    let sum = 0;
    let count = values.length;

    values.forEach(val => {
        sum += parseFloat(val) || 0;
    });
    return (sum / count).toFixed(2);
}
function calculatePercentage(marks, total) {
    if (total === 0) return 0;
    return ((marks / total) * 100).toFixed(2);
}
function calculateGP(percent) {
    if (percent >= 90) return 3;
    if (percent >= 75) return 2;
    if (percent >= 60) return 1;
    return 0;
}
