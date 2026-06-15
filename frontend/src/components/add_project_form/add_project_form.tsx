"use client";

import { FormEvent, useEffect, useState } from "react";

import { createProject } from "../../api/projects";
import { getAllUsers, type User } from "../../api/users";
import { createAssociate } from "../../api/associates";
import styles from "./add_project_form.module.css";

export default function AddProjectForm({ onProjectAdded }: { onProjectAdded?: () => void }) {
	{/* TODO: implement in part 2.3 */}
}
