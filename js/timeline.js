document.addEventListener("DOMContentLoaded", function () {
    const container = d3.select("#cvTimeline");
    if (container.empty()) {
        return;
    }

    const iconMap = {
        award: "🏆",
        project: "📁",
        tool: "🛠️",
        exchange: "✈️"
    };

    const timelineData = [
        {
            year: 2018,
            milestone: "2018 · Undergraduate at SJTU",
            orientation: "top",
            events: []
        },
        {
            year: 2021,
            milestone: "2021 · Vis life began",
            orientation: "bottom",
            events: [
                { label: '"Cultural Adaptation"', type: "project", side: "left" },
                { label: '"MBTIviz"', type: "project", side: "left" }
            ]
        },
        {
            year: 2022,
            milestone: "2022 · Graduate at SJTU",
            orientation: "top",
            events: [
                { label: "Exchange in France", type: "exchange", side: "right" },
                { label: '"Inequity in Educational Growth"', type: "award", side: "right" }
            ]
        },
        {
            year: 2023,
            milestone: "2023",
            orientation: "bottom",
            events: [
                { label: '"Extraction of Dialogue Characters"', type: "tool", side: "right" },
                { label: '"City Pulse"', type: "award", side: "right" },
                { label: '"EmoGeoCity"', type: "project", side: "right" }
            ]
        },
        {
            year: 2024,
            milestone: "2024",
            orientation: "top",
            events: [
                { label: "Exchange in PKUVIS", type: "exchange", side: "right" },
                { label: '"City Pulse" pictorial', type: "project", side: "right" },
                { label: '"Digital Conversation Visualization"', type: "tool", side: "right" },
                { label: '"Knowledge in Mengxi Bitan"', type: "tool", side: "right" },
                { label: '"LearnClusterVis"', type: "award", side: "right" }
            ]
        }
    ];

    const bbox = container.node().getBoundingClientRect();
    const width = Math.max(bbox.width || 0, 1080);
    const height = 320;
    const margin = { left: 90, right: 90 };
    const baselineY = height / 2;
    const stemLength = 80;
    const labelGap = 20;

    container.selectAll("*").remove();

    const svg = container
        .append("svg")
        .attr("class", "timeline-svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

    svg
        .append("line")
        .attr("class", "timeline-base")
        .attr("x1", margin.left)
        .attr("x2", width - margin.right)
        .attr("y1", baselineY)
        .attr("y2", baselineY);

    const xScale = d3
        .scalePoint()
        .domain(timelineData.map((d) => d.year))
        .range([margin.left, width - margin.right]);

    const branchLine = d3
        .line()
        .curve(d3.curveMonotoneX);

    const nodeGroups = svg
        .selectAll(".timeline-node")
        .data(timelineData)
        .enter()
        .append("g")
        .attr("class", (d) => `timeline-node timeline-node--${d.orientation || "top"}`)
        .attr("transform", (d) => `translate(${xScale(d.year)}, ${baselineY})`);

    nodeGroups
        .append("line")
        .attr("class", "timeline-stem")
        .attr("y1", 0)
        .attr("y2", (d) => (d.orientation === "top" ? -stemLength : stemLength));

    nodeGroups
        .append("circle")
        .attr("class", "timeline-node-dot")
        .attr("r", 4)
        .attr("cy", 0);

    const labelGroups = nodeGroups
        .append("g")
        .attr("class", "timeline-label")
        .attr(
            "transform",
            (d) => `translate(0, ${d.orientation === "top" ? -(stemLength + labelGap) : stemLength + labelGap})`
        );

    labelGroups
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text((d) => d.milestone);

    labelGroups.each(function () {
        const group = d3.select(this);
        const text = group.select("text");
        const bbox = text.node().getBBox();
        group
            .insert("rect", "text")
            .attr("x", bbox.x - 14)
            .attr("y", bbox.y - 10)
            .attr("width", bbox.width + 28)
            .attr("height", bbox.height + 20)
            .attr("rx", 12)
            .attr("ry", 12);
    });

    nodeGroups.each(function (nodeData) {
        const group = d3.select(this);
        const direction = nodeData.orientation === "bottom" ? 1 : -1;
        const events = nodeData.events || [];

        const eventsContainer = group.append("g").attr("class", "timeline-events-group");

        events.forEach((eventData, index) => {
            const side = eventData.side || "right";
            const horizontalSign = side === "left" ? -1 : 1;
            const verticalBase = stemLength + 32;
            const verticalSpacing = 26;
            const horizontalBase = 88;
            const horizontalSpacing = 26;

            const targetY = direction * (verticalBase + index * verticalSpacing);
            const targetX = horizontalSign * (horizontalBase + index * horizontalSpacing * 0.6);

            const pathData = [
                [0, direction * (stemLength - 6)],
                [horizontalSign * 22, direction * (stemLength + 8)],
                [targetX * 0.55, direction * (stemLength + 18 + index * 4)],
                [targetX, targetY]
            ];

            eventsContainer
                .append("path")
                .attr("class", "timeline-branch")
                .attr("d", branchLine(pathData));

            eventsContainer
                .append("text")
                .attr("class", "timeline-event-text")
                .attr("x", targetX + horizontalSign * 6)
                .attr("y", targetY + (direction === -1 ? -6 : 14))
                .attr("text-anchor", horizontalSign === -1 ? "end" : "start")
                .text(`${iconMap[eventData.type] || ""} ${eventData.label}`);
        });
    });
});

