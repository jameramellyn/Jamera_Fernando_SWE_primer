"use client";

import { FormEvent, useEffect, useState } from "react";

import { createAssociate, getAssociatesByProjectId } from "../../api/associates";
import { getAllProjects, type Project } from "../../api/projects";
import { getAllUsers, type User } from "../../api/users";
import styles from "./assign_user_to_project_form.module.css";

type AssignUserToProjectFormProps = {
	onAssignmentAdded?: () => void;
};

export default function AssignUserToProjectForm({ onAssignmentAdded }: AssignUserToProjectFormProps) {
	{/* TODO: implement in part 2.3 */}
}
