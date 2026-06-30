"use client";

import { FormEvent, useEffect, useState } from "react";

import { createProject } from "../../api/projects";
import { getAllUsers, type User } from "../../api/users";
import { createAssociate } from "../../api/associates";
import styles from "./add_project_form.module.css";

export default function AddProjectForm({
  onProjectAdded,
}: {
  onProjectAdded?: () => void;
}) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectManagerId, setProjectManagerId] = useState("");
  const [associateId, setAssociateId] = useState("");

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers = await getAllUsers();
        setUsers(allUsers);
      } catch {
        setError("Failed to load users.");
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      const newProject = await createProject({
        project_name: projectName,
        project_description: projectDescription,
        project_manager_id: Number(projectManagerId),
      });

      if (associateId) {
        await createAssociate({
          project_id: newProject.id,
          associate_id: Number(associateId),
        });
      }

      setProjectName("");
      setProjectDescription("");
      setProjectManagerId("");
      setAssociateId("");

      onProjectAdded?.();
    } catch {
      setError("Failed to create project.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label>
        Project Name
        <input
          type="text"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
          required
        />
      </label>

      <label>
        Project Description
        <textarea
          value={projectDescription}
          onChange={(event) => setProjectDescription(event.target.value)}
          required
        />
      </label>

      <label>
        Project Manager
        <select
          value={projectManagerId}
          onChange={(event) => setProjectManagerId(event.target.value)}
          required
        >
          <option value="">Select a manager</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.user_name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Associate
        <select
          value={associateId}
          onChange={(event) => setAssociateId(event.target.value)}
        >
          <option value="">None</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.user_name}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Add Project</button>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}