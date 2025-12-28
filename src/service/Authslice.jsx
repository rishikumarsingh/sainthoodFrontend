import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = "http://localhost:5000/api/";

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

  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
