WITH RecursiveSubdivisions AS (
    SELECT s.id, s.name, s.parent_id, 0 AS sub_level
    FROM subdivisions s
    JOIN collaborators c ON s.id = c.subdivision_id
    WHERE c.id = 710253

    UNION ALL

    SELECT s.id, s.name, s.parent_id, rs.sub_level + 1
    FROM subdivisions s
    JOIN RecursiveSubdivisions rs ON s.parent_id = rs.id
    WHERE s.id NOT IN (100055, 100059)
)
SELECT 
    c.id AS id,
    c.name AS name,
    rs.name AS sub_name,
    c.subdivision_id AS sub_id,
    rs.sub_level AS sub_level,
    (SELECT COUNT(*) FROM collaborators WHERE subdivision_id = c.subdivision_id) AS colls_count
FROM 
    collaborators c
JOIN 
    RecursiveSubdivisions rs ON c.subdivision_id = rs.id
WHERE 
    c.age < 40
ORDER BY 
    rs.sub_level ASC;