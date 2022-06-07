
export function index(req, res) {
    res.render("login");
}

export function add(req, res) {
    console.log(add);
    res.render("add");
}
export function edit(req, res) {
    res.render("edit");
}
export function view(req, res) {
    res.render("view");
}