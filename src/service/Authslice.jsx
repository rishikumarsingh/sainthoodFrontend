import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = "https://localhost:5000/api/";

const initialState = {
  loading: false,
  loginuser: null,
  notificationresponse: "",
  bannerresponse: "",
  galleryresponse: "",
  bannerImages: [],   // ✅ must be an array
  GalleryImages: [],   // ✅ must be an array
  error: null,
};

const getToken = () => {
  return localStorage.getItem('token');
};

// 🔑 Login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(apiUrl + "login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || 'Login failed');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔑 Create notification
export const notificationCreate = createAsyncThunk(
  'auth/notificationCreate',
  async (notificationData, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await fetch(apiUrl + "notificationCreate", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(notificationData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Notification saving failed');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔑 Fetch Banner Images
export const getBannerImages = createAsyncThunk(
  'auth/getBannerImages',
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await fetch(apiUrl + "getBannerImages", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Fetching banner images failed');
      }

      return await response.json(); // should be array of banners
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔑 Delete Notification
export const deleteNotification = createAsyncThunk(
  "auth/deleteNotification",
  async (deleteId, { rejectWithValue }) => {
    try {
      const token = getToken();

      const response = await fetch(
        `${apiUrl}notification/${deleteId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Notification delete failed");
      }

      return { success: true, id: deleteId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// 🔑 Banner Upload
export const bannerUpload = createAsyncThunk(
  'auth/bannerUpload',
  async (bannerData, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await fetch(apiUrl + "bannerUpload", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: bannerData,
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Banner upload failed');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔑 Gallery Upload
export const galleryUpload = createAsyncThunk(
  'auth/galleryUpload',
  async (galleryData, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await fetch(apiUrl + "galleryUpload", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: galleryData,
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Gallery upload failed');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔔 Fetch Notifications
export const getNotifications = createAsyncThunk(
  'auth/getNotifications',
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await fetch(apiUrl + "getNotifications", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
          errorResponse.message || 'Fetching notifications failed'
        );
      }

      return await response.json(); // should be array of notifications
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// 🔑 Fetch Gallery Images
export const getGalleryImages = createAsyncThunk(
  'auth/getGalleryImages',
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await fetch(apiUrl + "getGalleryImages", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Fetching gallery images failed');
      }

      return await response.json(); // should be array of galleries
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔑 Delete Banner
export const deleteBanner = createAsyncThunk(
  'auth/deleteBanner',
  async (deleteid, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await fetch(`${apiUrl}banner/${deleteid}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Banner delete failed');
      }

      return { success: true, id: deleteid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔑 Delete Gallery (if backend supports /gallery/:id)
export const deleteGallery = createAsyncThunk(
  'auth/deleteGallery',
  async (deleteid, { rejectWithValue }) => {
    try {
      const token = getToken();
      const response = await fetch(`${apiUrl}gallery/${deleteid}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Gallery delete failed');
      }

      return { success: true, id: deleteid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// 📩 Create Contact
export const contactCreate = createAsyncThunk(
  "auth/contactCreate",
  async (contactData, { rejectWithValue }) => {
    try {
      const token = getToken();

      const response = await fetch(apiUrl + "contactCreate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Contact create failed");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 📥 Get All Contacts
export const getContacts = createAsyncThunk(
  "auth/getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();

      const response = await fetch(apiUrl + "getContacts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Fetching contacts failed");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ❌ Delete Contact
export const deleteContact = createAsyncThunk(
  "auth/deleteContact",
  async (deleteId, { rejectWithValue }) => {
    try {
      const token = getToken();

      const response = await fetch(
        `${apiUrl}contact/${deleteId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Contact delete failed");
      }

      return { id: deleteId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// 🔑 Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.loginuser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.loginuser = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // notification
      .addCase(notificationCreate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(notificationCreate.fulfilled, (state, action) => {
        state.loading = false;
        state.notificationresponse = action.payload;
        state.error = null;
      })
      .addCase(notificationCreate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      // get notifications
      .addCase(getNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload?.data || action.payload; // ✅ array
        state.error = null;
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // delete notification
      .addCase(deleteNotification.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = state.notifications.filter(
          (item) => item._id !== action.payload.id
        );
      })
      .addCase(deleteNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // banner upload
      .addCase(bannerUpload.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bannerUpload.fulfilled, (state, action) => {
        state.loading = false;
        state.bannerresponse = action.payload;
        state.error = null;
      })
      .addCase(bannerUpload.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // gallery upload
      .addCase(galleryUpload.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(galleryUpload.fulfilled, (state, action) => {
        state.loading = false;
        state.galleryresponse = action.payload;
        state.error = null;
      })
      .addCase(galleryUpload.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })



      // get banner images
      .addCase(getBannerImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBannerImages.fulfilled, (state, action) => {
        state.loading = false;
        state.bannerImages = action.payload?.data || action.payload; // ✅ array
        state.error = null;
      })
      .addCase(getBannerImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // get gallery images
      .addCase(getGalleryImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGalleryImages.fulfilled, (state, action) => {
        state.loading = false;
        state.GalleryImages = action.payload?.data || action.payload; // ✅ array
        state.error = null;
      })
      .addCase(getGalleryImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      // ================= CREATE CONTACT =================
      .addCase(contactCreate.pending, (state) => {
        state.loading = true;
      })
      .addCase(contactCreate.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(contactCreate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ================= GET CONTACTS =================
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload?.data || action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ================= DELETE CONTACT =================
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(
          (item) => item._id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
