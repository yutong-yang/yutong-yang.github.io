function tab_mevis() {
    document.getElementById("aboutme").className = ""
    document.getElementById("publications").className = ""
    document.getElementById("mevis").className = "current_page_item"
        // document.getElementById("projects").className = ""
    document.getElementById("personal").className = ""
    document.getElementById("div_aboutme").style.display = "none"
    document.getElementById("div_publications").style.display = "none"
        // document.getElementById("div_projects").style.display = "none"
    document.getElementById("div_mevis").style.display = "block"
    document.getElementById("div_personal").style.display = "none"

    // 获取div_mevis的宽度和高度
    var div = document.getElementById('div_mevis');
    var width = div.offsetWidth;
    var height = div.offsetHeight;

    // 创建SVG容器
    var svg = d3.select("#div_mevis").append("svg")
        .attr("width", width)
        .attr("height", height);


    // 创建比页面稍小的坐标轴
    var xScale = d3.scaleLinear().domain([0, 30]).range([50, width - 50]);
    var yScale = d3.scaleLinear().domain([0, 10]).range([height - 100, 50]);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    svg.append("g")
        .attr("transform", "translate(0," + (height - 100) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("transform", "translate(50,0)")
        .call(yAxis);

    // 定义数据
    var medata = [
        {shape: "circle", cx: xScale(0), cy: yScale(5), r: 5, text: "I born as a normal girl.", color: "pink"},
        {shape: "circle", cx: xScale(5), cy: yScale(3), r: 15, text: "I got a scar on my face.", color: "#666"},
        {shape: "circle", cx: xScale(13), cy: yScale(3), r: 15, text: "I started my period.", color: "red"},
        {shape: "triangle", cx: xScale(15), cy: yScale(6), r: 20, text: "recommend (for admission to school)", color: "rgb(145, 177, 238)"},
        // 我初中考试考得很好，选择接收录取高中的保送条约。
        {shape: "circle", cx: xScale(18), cy: yScale(3), r: 15, text: "SPEIT, SJTU.", color: "rgb(145, 177, 238)"},
        {shape: "circle", cx: xScale(20), cy: yScale(4), r: 25, text: "Think more about choice. I began to reflect on what I really wanted to do, not just work hard as before.", color: "rgb(145, 177, 238)"},
        {shape: "triangle", cx: xScale(21), cy: yScale(7), r: 20, text: "My vis life begin.", color: "rgb(145, 177, 238)"},
        {shape: "triangle", cx: xScale(22), cy: yScale(7), r: 15, text: "Exchange to France.", color: "rgb(145, 177, 238)"},
        {shape: "circle", cx: xScale(23), cy: yScale(8), r: 25, text: "Breaking up with my boyfirend, I think more about gender.", color: "rgb(145, 177, 238)"},
        {shape: "rect", cx: xScale(24), cy: yScale(8), r: 20, text: "Hope I can continue to realize my ideals...", color: "rgb(145, 177, 238)"}
    ];

    // 定义曲线生成器
    var lineGenerator = d3.line()
        .x(function(d) { return d.cx; })
        .y(function(d) { return d.cy; })
        .curve(d3.curveCardinal);

    // 绘制曲线
    svg.append("path")
        .attr("d", lineGenerator(medata))
        .attr("stroke", "#555")
        .attr("stroke-width", 3)  // 修改这个值来改变线的粗细
        .attr("stroke-opacity", 0.5)  // 修改这个值来改变线的透明度，范围是0（完全透明）到1（完全不透明）
        .attr("fill", "none");


    // 绘制图形
    medata.forEach(function(d) {
        var shape;
        if (d.shape === "circle") {
            shape = svg.append("circle")
                .attr("cx", d.cx)
                .attr("cy", d.cy)
                .attr("r", d.r)
                .style("fill", d.color);
        } else if (d.shape === "triangle") {
            shape = svg.append("polygon")
                .attr("points", `${d.cx},${d.cy} ${d.cx+d.r},${d.cy+d.r} ${d.cx-d.r},${d.cy+d.r}`)
                .style("fill", d.color);
        } else if (d.shape === "rect") {
            shape = svg.append("rect")
                .attr("x", d.cx)
                .attr("y", d.cy)
                .attr("width", d.r)
                .attr("height", d.r)
                .style("fill", d.color);
        }
        // 添加文本
        svg.append("text")
            .attr("x", d.cx)
            .attr("y", d.cy)
            .text(d.text)
            .style("visibility", "hidden");

        // 添加鼠标悬浮事件
        shape.on("mouseover", function() {
            d3.select(this.nextSibling)
                .style("visibility", "visible");
        });

        shape.on("mouseout", function() {
            d3.select(this.nextSibling)
                .style("visibility", "hidden");
        });
    });



}