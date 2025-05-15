import React, { useState, useEffect, useCallback, useMemo } from "react";
// eslint-disable-next-line no-unused-vars
import UserService from "../../services/user-service";
import "./styles.css";
import Header from "../../components/Header";
import EditUserModal from "../../components/Modal/EditUserModal";
import DeleteConfirmationModal from "../../components/Modal/DeleteConfirmationModal";
import AddUserModal from "../../components/Modal/AddUserModal";
import useNotification from "../../hooks/useNotification";
import { Pencil, Plus, Trash } from "lucide-react";
import Button from "../../components/Button";

function Users() {
  const { showSuccess, showError } = useNotification();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const userService = useMemo(() => new UserService(), []);

  const fetchUsers = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const data = await userService.list();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      showError(err.message);
    }
  }, [userService, showError]);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleDelete = (user) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const handleSaveEdit = async (formData) => {
    try {
      await userService.update(selectedUser.email, formData);
      setShowEditModal(false);
      const updatedUsers = users.map((user) =>
        user.email === selectedUser.email ? formData : user
      );
      setUsers(updatedUsers);
      showSuccess("Usuário editado com sucesso!");
    } catch (err) {
      showError(err.message);
    }
  };

  const handleSaveAdd = async (formData) => {
    try {
      await userService.create(formData);
      setShowAddModal(false);
      setUsers([...users, formData]);
    } catch (err) {
      console.log(err.message);
      showError(err.message);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await userService.delete(userToDelete.email);
      setShowDeleteModal(false);
      fetchUsers();
      showSuccess("Usuário excluído com sucesso!");
    } catch (err) {
      showError("Erro ao excluir usuário. Tente novamente.");
    }
  };

  if (loading) {
    return <div className="loading">Carregando usuários...</div>;
  }

  return (
    <div className="users-container">
      <Header title="SPS TEST - CRUD de Usuários" />
      <div className="users-container-header">
        <Button
          icon={<Plus size={14} />}
          variant="save"
          size="small"
          onClick={() => setShowAddModal(true)}
        >
          Adicionar Usuário
        </Button>
      </div>
      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Tipo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.type}</td>
                <td>
                  <div className="actions-container">
                    <Button
                      onClick={() => handleEdit(user)}
                      icon={<Pencil size={14} />}
                      size="small"
                    >
                      <p>Editar</p>
                    </Button>
                    <Button
                      onClick={() => handleDelete(user)}
                      icon={<Trash size={14} />}
                      size="small"
                      variant="cancel"
                    >
                      <p>Excluir</p>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditModal && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveEdit}
        />
      )}

      {showDeleteModal && (
        <DeleteConfirmationModal
          userName={userToDelete.name}
          onConfirm={handleConfirmDelete}
          onClose={() => setShowDeleteModal(false)}
        />
      )}

      {showAddModal && (
        <AddUserModal
          onClose={() => setShowAddModal(false)}
          onSave={handleSaveAdd}
        />
      )}
    </div>
  );
}

export default Users;
