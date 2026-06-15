"use client";

import { useEffect, useState } from "react";

import { getAllProjects, type Project } from "../../api/projects";
import { getAssociatesByProjectId } from "../../api/associates";
import { getUserById } from "../../api/users";
import styles from "./project_display.module.css";

type ProjectDisplayProps = {
	refreshTrigger?: number;
};

export default function ProjectDisplay({ refreshTrigger = 0 }: ProjectDisplayProps) {
	{/* TODO: implement in part 2.3 */}

	return (
		<div className={styles.tableWrap}>
			{/* TODO: implement in part 2.1 */}
		</div>
	);
}
