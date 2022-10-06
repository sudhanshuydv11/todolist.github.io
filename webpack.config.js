
module.exports = {
    entry: ["./src/js/add_task_script.js", "./src/js/content_script.js"],
    output: {
        filename: "content_script.js",
        path: __dirname + "/dist"
    }
};
