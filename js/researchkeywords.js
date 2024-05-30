function tab_rk() {
    document.getElementById("aboutme").className = "current_page_item"
    document.getElementById("publications").className = ""
        // document.getElementById("projects").className = ""
    document.getElementById("personal").className = ""
    document.getElementById("div_aboutme").style.display = "block"
    document.getElementById("div_publications").style.display = "none"
        // document.getElementById("div_projects").style.display = "none"
    document.getElementById("div_personal").style.display = "none"

    const data = {
        nodes: [
            // { name: 'quantitative' },
            // { name: 'qualitative' },
            // { name: 'objective' },
            // { name: 'subjective' },
            { name: 'data analysis' },
            { name: 'visualization' },
            { name: 'design' },
            // { name: 'interview' },
            { name: 'situation' },
            { name: 'consequence' },
            { name: 'perception' },
            { name: 'emotion' },
            // { name: 'existentialism' },
            // { name: 'feminism' },
            // { name: 'phenomenology' }
        ],
        links: [
            // { source: 'quantitative', target: 'objective', value: 5 },
            // { source: 'quantitative', target: 'subjective', value: 5 },
            // { source: 'qualitative', target: 'subjective', value: 5 },
            // { source: 'objective', target: 'data analysis', value: 10 },
            // { source: 'subjective', target: 'visualization', value: 4 },
            // { source: 'subjective', target: 'interview', value: 2 },
            // { source: 'subjective', target: 'design', value: 4 },
            { source: 'design', target: 'situation', value: 5 },
            { source: 'data analysis', target: 'situation', value: 5 },
            { source: 'visualization', target: 'situation', value: 5 },
            { source: 'situation', target: 'consequence', value: 5 },
            { source: 'situation', target: 'perception', value: 5 },
            { source: 'situation', target: 'emotion', value: 5 },
            // { source: 'interview', target: 'perception', value: 2.5 },
            // { source: 'interview', target: 'emotion', value: 2.5 },
            // { source: 'consequence', target: 'existentialism', value: 2.5 },
            // { source: 'consequence', target: 'feminism', value: 2.5 },
            // { source: 'perception', target: 'phenomenology', value: 2.5 }
        ]
    };

    // 获取 div 元素
    const divElement = document.getElementById('sankey-chart'); 

    // 获取 div 的宽度和高度
    const width = divElement.clientWidth;
    const height = 150;
    const offsetLeft = divElement.offsetLeft
    const topMargin = 10; // 顶部 margin
    const bottomMargin = 50; // 底部 margin
    console.log(divElement)

    // 创建一个 Sankey 图实例
    const sankey = d3.sankey()
        .nodeWidth(15)
        .nodePadding(10)
        .size([width, height])
        .nodeAlign(d3.sankeyLeft) // 将节点对齐到左侧
        .extent([[1, 1 + topMargin], [width - 1, height - 1 - bottomMargin]]); // 调整 sankey 范围

    // 从数据中提取节点和链接
    const nodes = data.nodes.map(d => Object.assign({}, d));
    const links = data.links.map(d => Object.assign({}, d));

    // 设置节点和链接的源和目标
    links.forEach(link => {
        link.source = nodes.find(node => node.name === link.source);
        link.target = nodes.find(node => node.name === link.target);
    });

    // 自定义节点颜色
    const colorScale = d3.scaleOrdinal()
        .domain(nodes.map(d => d.name))
        .range(['rgb(0, 0, 0)', 'rgb(0, 0, 0)',  'rgb(0, 0, 0)',  '#3731203a',  '#3731203a',  '#3731203a',  '#3731203a',  '#3731203a',  '#3731203a',  '#3731203a',  ]);

    // 创建 SVG 元素
    const svg = d3.select('body').append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr("transform", `translate(${offsetLeft}, 0)`);

    // 绘制 Sankey 图
    const { nodes: sankeyNodes, links: sankeyLinks } = sankey({
        nodes,
        links
    });


    // 绘制链接
    const linkGroup = svg.append('g')
        .selectAll('.link')
        .data(sankeyLinks)
        .enter().append('path')
        .attr('class', 'link')
        .attr('d', d3.sankeyLinkHorizontal())
        .style('stroke-width', d => Math.max(1, d.width))
        .style('stroke', d => colorScale(d.source.name)) // 使用自定义颜色
        .style('fill', 'none');

    // 绘制节点
    const nodeGroup = svg.append('g')
        .selectAll('.node')
        .data(sankeyNodes)
        .enter().append('rect')
        .attr('class', 'node')
        .attr('x', d => d.x0)
        .attr('y', d => d.y0)
        .attr('height', d => d.y1 - d.y0)
        .attr('width', d => d.x1 - d.x0)
        .attr('opacity', 0.7)
        .style('fill', d => colorScale(d.name)); // 使用自定义颜色

    // 添加节点标签
    const labelGroup = svg.append('g')
        .selectAll('.node-label')
        .data(sankeyNodes)
        .enter().append('text')
        .attr('class', 'node-label')
        .attr('x', d => d.x0 - 6)
        .attr('y', d => (d.y1 + d.y0) / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'end')
        .text(d => d.name)
        .attr('font-size', 10)
        .attr('x', d => d.x0 < 10 ? d.x0 + width/12 : d.x0 - 6); // 确保左侧文字可见

    // 添加链接上的文字标签
    svg.append('g')
        .selectAll('.link-label')
        .data(sankeyLinks)
        .enter().append('text')
        .attr('class', 'link-label')
        .attr('x', d => (d.source.x1 + d.target.x0) / 2)
        .attr('y', d => (d.y1 + d.y0) / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .attr('fill', 'rgba(63,60,59,0.8)')
        .attr('font-size', 8)
        .text(d => {
            if (d.source.name === 'situation' && d.target.name === 'perception') {
                return 'phenomenology';
            } else if (d.source.name === 'situation' && d.target.name === 'consequence') {
                return 'existentialism, feminism';
            } else {
                return '';
            }
        });
}